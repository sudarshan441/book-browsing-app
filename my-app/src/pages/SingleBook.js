import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const getSingleBook = async(id)=>{
    return  await axios.get(`https://book-zh1g.onrender.com/book/${id}`);
}

export default function SingleBook(){
    const [data,setData]=useState({});

    const { id } = useParams()
    
    useEffect(()=>{
     getSingleBook(id).then((res)=>{
       setData(res.data)
     }).catch((err)=>{
        alert(err)
     })
    },[])

    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        },
        coverImage: {
          maxWidth: '200px',
          maxHeight: '300px',
        },
        bookName: {
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '10px 0',
        },
        author: {
          fontSize: '18px',
          color: '#555',
        },
        price: {
          fontSize: '20px',
          color: 'green',
          margin: '10px 0',
        },
        genre: {
          fontSize: '16px',
          fontStyle: 'italic',
          color: 'blue',
        },
         desccontainer: {
            backgroundColor: 'lightgray',
            padding: '20px',
            border: '1px solid gray',
            borderRadius: '5px',
          },
          description: {
            fontSize: '16px',
            lineHeight: '1.5',
          },
      };
    
    return (
    <div>
    <div style={styles.container}>
    <img  src={data.ImageUrl} alt="Book Cover" style={styles.coverImage} />
    <div style={styles.bookName}>{data.Name}</div>
    <div style={styles.author}>Author: {data.Author}</div>
    <div style={styles.price}>Price: {data.Price}</div>
    <div style={styles.genre}>Genre: {data.Genre}</div>
  </div>
  <div style={styles.desccontainer}>
  <h2>Description</h2>
  <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus a felis congue, ut vestibulum purus fringilla. Integer eget ultricies sapien. Sed euismod, justo eu varius volutpat, dui metus venenatis urna, sit amet ultrices justo felis sit amet libero. Nulla id nulla at mi ullamcorper eleifend. Sed posuere tincidunt metus, ac convallis dolor ultrices vel. In facilisis eu justo eu malesuada. Suspendisse sed dictum ex. Aliquam non eleifend elit. Donec sodales diam at enim euismod, non sollicitudin risus malesuada.

  Sed a bibendum ipsum. Cras a sem eu ante pharetra convallis. Phasellus hendrerit, orci id efficitur gravida, justo odio convallis odio, eget laoreet odio purus nec erat. In luctus id dolor eget tristique. Aliquam id diam ligula. Nulla facilisi. Quisque eu ligula nec ex laoreet tincidunt. Vivamus viverra, augue ac auctor feugiat, ligula quam aliquet metus, in dictum nulla elit nec lectus. Sed id feugiat felis. Curabitur hendrerit metus non libero lobortis scelerisque. Sed pellentesque nulla ac ipsum suscipit, et condimentum erat euismod.
  
  Praesent non sapien sit amet odio facilisis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed id tincidunt purus. Integer ac libero velit. Proin id justo sed orci bibendum iaculis id eget justo. Sed at elit et nisl feugiat varius vel ut eros. Curabitur gravida odio nec vehicula feugiat. Vivamus a urna id lorem volutpat varius. Vivamus non justo eu tortor rhoncus vestibulum. In in odio purus. Integer ut arcu eget augue condimentum varius a sit amet ex. Sed in justo et ex hendrerit tincidunt vel a libero.
  
  Phasellus eu sapien sit amet tortor dapibus efficitur nec eu tortor. Nullam ac sapien vehicula, ullamcorper dolor nec, tincidunt libero. Sed semper urna id varius auctor. Nullam tristique purus id augue hendrerit, et ultricies nulla tincidunt. Nunc euismod neque sed arcu volutpat, eu fermentum elit bibendum. Sed volutpat, tortor sit amet bibendum luctus, erat justo dapibus libero, id volutpat metus urna eu quam. Duis efficitur est et sapien hendrerit, ac volutpat quam tincidunt.
  
  Nunc nec justo ac nulla scelerisque auctor at id risus. Proin non dapibus velit. Sed dignissim in odio eu gravida. Etiam at efficitur urna, ac scelerisque dui. Aliquam in justo vel orci rhoncus congue. Quisque nec nulla sit amet augue vestibulum eleifend. Nam quis mi non justo rhoncus rhoncus. Vivamus volutpat, est et dignissim fringilla, metus neque laoreet nisl, non iaculis quam odio a urna. Nullam nec neque eu risus posuere rhoncus. Fusce ut ligula non augue luctus ullamcorper. Aenean eget bibendum arcu.
  </p>
</div>
    </div>
     
    )
    }