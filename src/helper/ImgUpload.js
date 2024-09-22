import axios from "axios";

export const ImgUpload = async (imgState) => {
  console.log(imgState);
  const UploadForm = new FormData();
  UploadForm.append("file", imgState);
  UploadForm.append("upload_preset", "fiver_preset");
  UploadForm.append("cloud_name", "dvv4ffhvi");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dvv4ffhvi/image/upload",
      UploadForm
    );
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const ImgArryUpload = async (imgState) => {
  try {
    const data = imgState?.map(async (e) => {
      const createImgsForm = new FormData();
      createImgsForm.append("file", e);
      createImgsForm.append("upload_preset", "fiver_preset");
      createImgsForm.append("cloud_name", "dvv4ffhvi");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvv4ffhvi/image/upload",
        createImgsForm
      );
      return res.data;
    });
  } catch (error) {
    return error.message;
  }
};
