import { useContext } from "react";
import { PhotoContext } from "../context/PhotosContext";
import IconHeart from "./IconHeart";


const Gallery = () => {

  const { photoData } = useContext(PhotoContext);

  return <div className="gallery grid-columns-5 p-3">
    {photoData === null ? (
      <h1>Loading...</h1>
    ) : (
      photoData.map((photo) => (
        <div style={{backgroundImage: `url(${photo.src.original})`}} className="photo" key={photo.id}>
          <IconHeart filled = {photo.liked} photoId = {photo.id} />
          <p className="textPhoto">{photo.alt}</p>
        </div>)
      )
    )}

  </div>;
};
export default Gallery;