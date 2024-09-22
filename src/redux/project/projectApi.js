import axios from "axios";

export const fetchProjects = async () => {
  const data = await axios.get("project/");
};
