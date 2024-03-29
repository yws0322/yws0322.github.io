export enum State {
  All = "all",
  Open = "open",
  Closed = "closed",
}

export type ListMilestonesOptions = {
  state?: State;
  page?: number;
  pageSize?: number;
};

export type ListIssuesOptions = {
  milestone: number;
  labels?: string;
  state?: State;
  page?: number;
  pageSize?: number;
};

export type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Milestone = {
  id: number;
  number: number;
  title: string;
  description: string;
  open_issues: number;
};

export type Issue = {
  id: number;
  number: number;
  title: string;
  state: State;
  body: string;
  comments: number;
  user: User;
  milestone: Milestone;
  labels: Label[];
  html_url: string;
  created_at: string;
  updated_at: string;
};

export type Label = {
  id: number;
  name: string;
  description: string;
  color: string;
};

function toQuery(raw: Record<string, unknown>) {
  const params = new URLSearchParams();

  Object.keys(raw).forEach((key) => {
    if (raw[key]) params.append(key, String(raw[key]));
  });

  return `?${params.toString()}`;
}

function hasBody(method: string) {
  return ["POST", "PUT", "PATCH"].includes(method);
}

class Github {
  private apiBase = "https://api.github.com";

  constructor(
    private token: string,
    private owner: string,
    private repo: string
  ) {}

  private async request(
    method: string,
    url: string,
    data?: Record<string, unknown>
  ) {
    let query = "";
    let body = data;

    if (data && !hasBody(method)) {
      query = toQuery(data);
      body = undefined;
    }

    const response = await fetch([this.apiBase, url, query].join(""), {
      method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${this.token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    return response.json();
  }

  public async listMilestones(
    options: ListMilestonesOptions = {}
  ): Promise<Milestone[]> {
    const { state, page, pageSize } = options;
    const query = { state, page, per_page: pageSize };

    return this.request(
      "GET",
      `/repos/${this.owner}/${this.repo}/milestones`,
      query
    );
  }

  public async listIssues(options: ListIssuesOptions): Promise<Issue[]> {
    const { milestone, labels, state, page, pageSize } = options;

    const query = {
      milestone,
      labels,
      state,
      page,
      per_page: pageSize,
      creator: this.owner,
    };

    return this.request(
      "GET",
      `/repos/${this.owner}/${this.repo}/issues`,
      query
    );
  }

  public getIssue(issue: number): Promise<Issue> {
    return this.request(
      "GET",
      `/repos/${this.owner}/${this.repo}/issues/${issue}`
    );
  }
}

export default new Github(
  import.meta.env.GITHUB_ACCESS_TOKEN_PART1 +
    import.meta.env.GITHUB_ACCESS_TOKEN_PART2,
  import.meta.env.GITHUB_OWNER,
  import.meta.env.GITHUB_REPO
);
