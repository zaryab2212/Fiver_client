import React, { useEffect, useState } from "react";
import "./addgig.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createGigAsync } from "../redux/gigs/gigSice";
import { ImgUpload } from "../helper/ImgUpload";
import { useNavigate } from "react-router-dom";

const AddGig = () => {
  const { loading, error } = useSelector((state) => state.gig);
  const dispatch = useDispatch();
  const [create, setCreate] = useState({
    title: "",
    desc: "",
    cat: "",
    price: "",
    shortTitle: "",
    shortDesc: "",
    deliveryTime: 0,
    revisionNumber: 3,
    features: [],
  });
  const navigate = useNavigate();
  const [createImgs, setCreateImgs] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [wait, setWait] = useState(false);

  const handleGigSubmit = async (e) => {
    e.preventDefault();

    setWait(true);
    const formData = new FormData();
    formData.append("title", create.title);
    formData.append("desc", create.desc);
    formData.append("cat", create.cat);
    formData.append("price", +create.price);
    formData.append("shortDesc", create.shortDesc);
    formData.append("shortTitle", create.shortTitle);
    formData.append("revisionNumber", +create.revisionNumber);
    formData.append("deliveryTime", +create.deliveryTime);
    // formData.append("features", create.features);

    if (createImgs) {
      createImgs?.map(async (e) => {
        const createImgsForm = new FormData();
        createImgsForm.append("file", e);
        createImgsForm.append("upload_preset", "fiver_preset");
        createImgsForm.append("cloud_name", "dvv4ffhvi");

        const upload = await axios.post(
          "https://api.cloudinary.com/v1_1/dvv4ffhvi/image/upload",
          createImgsForm
        );
        formData.append("images", `${upload?.data.url}`);
      });
    }
    if (coverImg) {
      const upload = await ImgUpload(coverImg);
      formData.set("image", `${upload?.url}`);
    }
    setWait(false);
    dispatch(createGigAsync(formData));
    if (!error) {
      setCreate({
        title: "",
        desc: "",
        cat: "",
        price: "",
        shortTitle: "",
        shortDesc: "",
        deliveryTime: 3,
        revisionNumber: 3,
        features: [],
      });

      setCreateImgs(null);
      setCoverImg(null);
      navigate("/", { replace: true });
    }
  };

  const handleInput = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
      // ...(e.target.cover && { [e.target.cover]: e.target.files[0] }),
      // ...(e.target.images && { [e.target.images]: e.target.files }),
    });
  };

  const handleRemove = (e) => {
    const index = createImgs.filter((img) => img !== e);
    setCreateImgs([...index]);
  };

  const handleManyFiles = (e) => {
    const filesArray = Array.from(e.target.files); // Convert FileList to array
    setCreateImgs([...createImgs, ...filesArray]); // Append new files to existing array
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="">
        <h2 className="heading"> Add New Gig</h2>

        <form
          className="flex justify-center align-items-center d-flex w-100  gap-5"
          onSubmit={handleGigSubmit}
        >
          <div className="flex justify-center align-items-center d-flex w-100 flex-column gap-4">
            <div className="w-100  d-flex flex-column">
              <label className="fs-4">Title</label>
              <input
                className="w-100 rounded-3 p-3"
                type="text"
                placeholder="Enter Gig name"
                onChange={handleInput}
                value={create.title}
                name="title"
              />
            </div>
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Category</label>
              <select
                name="cat"
                onChange={handleInput}
                className=" rounded-3 w-100 p-3"
              >
                <option value="Design">Design</option>
                <option value="web-Development">web-Development</option>
                <option value="data-entry">Data Entry</option>
                <option value="video-editing">video Editing</option>
                <option value="app-Development">App Development</option>
                <option value="seo">Seo</option>
              </select>
            </div>
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Cover Image</label>
              <input
                className="w-100 rounded-3 p-3"
                type="file"
                placeholder="choose your file here"
                onChange={(e) => setCoverImg(e.target.files[0])}
                name="cover"
              />
            </div>
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Updated Images</label>
              <input
                className="w-100 p-3 rounded-3"
                type="file"
                placeholder="choose your file here"
                onChange={handleManyFiles}
                name="image"
              />
              <div className="rounded-4  p-2 flex d-flex flex-wrap gap-4">
                {createImgs &&
                  createImgs.map((e) => {
                    return (
                      <div className="rounded-4 bg-light p-2">
                        {e.name}{" "}
                        <span
                          onClick={() => handleRemove(e)}
                          className="p-1 border-2 border border-black cursor-pointer   rounded-5"
                        >
                          <b style={{ color: "red", cursor: "pointer" }}>X</b>
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">description</label>
              <textarea
                height={8}
                className="w-100 p-3 h-600 rounded-3"
                type="text"
                onChange={handleInput}
                value={create.desc}
                name="desc"
              ></textarea>
            </div>
            {error && (
              <p className="text-danger f-4">
                {" "}
                {error.error?.message || error.message}
              </p>
            )}
            {loading ||
              (wait && <p className="text-danger f-4">Please Wait...</p>)}
            {!wait && !loading && (
              <button
                type="submit"
                className="w-100 btn btn-success rounded-3 p-3 "
              >
                Create
              </button>
            )}
          </div>
          <div className="flex justify-start align-items-center d-flex w-100 flex-column gap-4">
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Service Title</label>
              <input
                className="w-100 p-3 rounded-3"
                type="text"
                placeholder="eg. One page webdesign"
                onChange={handleInput}
                value={create.shortTitle}
                name="shortTitle"
              />
            </div>
            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Short Description</label>
              <textarea
                height={7}
                className="w-100 rounded-3 p-3 h-600"
                type="text"
                placeholder="enter detailed descrioption of your gig"
                onChange={handleInput}
                value={create.shortDesc}
                name="shortDesc"
              ></textarea>
            </div>

            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Delivery Time</label>
              <input
                className="w-100 rounded-3 p-3"
                type="text"
                placeholder="eg. 3 days"
                onChange={handleInput}
                value={create.deliveryTime}
                name="deliveryTime"
              />
            </div>
            <div className="w-100  d-flex flex-column">
              <label className="fs-4">Revision Numer</label>
              <input
                className="w-100 p-3 rounded-3"
                type="number"
                onChange={handleInput}
                value={create.revisionNumber}
                name="revisionNumber"
              />
            </div>

            <div className="w-100  d-flex flex-column gap-3">
              {" "}
              <label className="fs-4">Add Features</label>
              <input
                className="w-100 rounded-3 p-3"
                type="text"
                placeholder=""
                onChange={handleInput}
                value={create.features.f1}
                name="features"
              />
              <input
                className="w-100 rounded-3 p-3"
                type="text"
                placeholder=""
                onChange={handleInput}
                value={create.features.f3}
                name="features1"
              />
              <input
                className="w-100 rounded-3 p-3"
                type="text"
                placeholder=""
                onChange={handleInput}
                value={create.features.f2}
                name="features2"
              />
            </div>

            <div className="w-100  d-flex flex-column">
              {" "}
              <label className="fs-4">Price</label>
              <input
                className="w-100 rounded-3 p-3"
                type="number"
                onChange={handleInput}
                value={create.price}
                name="price"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGig;
