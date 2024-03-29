import { format } from "date-fns";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useHandling from "../../hooks/use-handling";
import useQuery from "../../hooks/use-query";
import StudyPostModel from "../../models/StudyPostModel";
import github from "../../service/github";
import { createQueryURL } from "../../utils";
import { Box } from "@mui/material";

function usePost() {
  const { id } = useParams();
  const [post, setPost] = useState<StudyPostModel>();

  const [loading, load] = useHandling(
    useCallback(async () => {
      const result = await github.getIssue(parseInt(id!, 10));
      setPost(StudyPostModel.from(result));
    }, [id]),
    true
  );

  useEffect(() => {
    load();
  }, [id]);

  return [loading, post] as const;
}

export default memo(function Post() {
  const navigate = useNavigate();
  const [postLoading, post] = usePost();

  const getLabelLink = useCallback((label: string) => {
    return `../${createQueryURL({ label, page: 1 })}`;
  }, []);

  const onPageChange = useCallback((page: number) => {
    navigate(createQueryURL({ page }));
  }, []);

  return <Box></Box>;
});
