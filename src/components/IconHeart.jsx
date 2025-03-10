import { useState, useContext } from "react";
import { PhotoContext } from "../context/PhotosContext";

const IconHeart = ({ filled, photoId }) => {

  const [isLiked , setIsLiked] = useState(filled);
  const {photoData, setPhotoData} = useContext(PhotoContext)

  const modifyProperty = (id, newProperty) =>{
    const newData = photoData.map(object =>{
      if(object.id === id){
        return {...object, liked: newProperty}
        
      }
      return object;
    })
    setPhotoData(newData);
  };

  return (
    <svg onClick={(e) => {
      const newIsLiked = !isLiked;
      setIsLiked(newIsLiked);
      modifyProperty(photoId, newIsLiked)
    }}
      width="40px"
      viewBox="0 0 24 24"
    >
      <path
        fill={isLiked ? "red" : "white"}
        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
      />
    </svg>
  );
};
export default IconHeart;
