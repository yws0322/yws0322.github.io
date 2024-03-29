import { Issue } from "../service/github";
import LabelModel from "./LabelModel";

export default class StudyPostModel {
  private constructor(
    public id: number,
    public number: number,
    public title: string,
    public body: string,
    public comments: number,
    public labels: LabelModel[],
    public htmlUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static from(raw: Issue): StudyPostModel {
    return new StudyPostModel(
      raw.id,
      raw.number,
      raw.title,
      raw.body,
      raw.comments,
      raw.labels.map(LabelModel.from),
      raw.html_url,
      raw.created_at,
      raw.updated_at
    );
  }
}
