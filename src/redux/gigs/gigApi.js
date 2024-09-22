import axios from "axios";

export const fetchGigByCategory = async (query) => {
  var q = "?";
  if (query.min) {
    q = q + "min=" + query.min;
  }
  if (query.max) {
    q = q + "&max=" + query.max;
  }
  if (query.search) {
    q = q + "&search=" + query.search;
  }
  if (query.cat) {
    q = q + "&cat=" + query.cat;
  }

  const data = await axios.get(`/gig/${query ? q : ""}`, {
    withCredentials: true,
  });
  return data;
};

export const createGig = async (data) => {
  const res = await axios.post("/gig/create", data, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};
export const getAllGig = async () => {
  //   const { create } = data;
  const res = await axios.get("/gig", {
    withCredentials: true,
  });
  return res;
};

export const removeGig = async (id) => {
  const res = await axios.delete("/gig/" + id, { withCredentials: true });
  return res;
};

export const getSingleGig = async (id) => {
  const res = await axios.get("/gig/" + id, {
    withCredentials: true,
  });
  return res;
};
