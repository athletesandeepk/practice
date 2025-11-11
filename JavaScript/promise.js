async function handlePromise() {
  const images = ["img1", "img2", "img3"];
  const uploadImage = async (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name === "img2") {
          reject("Image not found");
        }
        resolve("Data Fetched");
      }, 2000);
    });
  };

  const currTime = Date.now();

  try {
    const res = await Promise.allSettled(images.map(async (image) => await uploadImage(image)));
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  console.log((Date.now() - currTime) / 1000);
}

handlePromise();
