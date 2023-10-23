import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import { Heart } from 'iconsax-react'
import './Assets/styles.css'
import { Link } from 'react-router-dom'


const CardHomeTurism = ({ cardImage, cardTitle, cardDescription, star, link }) => {
  return (
    <Card className='cardHomeTurism'>
      <div className='cardHomeTurism_ActionArea'>
        <div className='cardHomeTurism_media'>
          <CardMedia component='img' className='cardHomeTurismImg' image={cardImage} alt={cardTitle}/>
          <CardActions className='cardHomeTurism_heart'>
            <IconButton className='cardHomeTurism-heart_IconButton'>
              <Heart size="32" color="white"/>
            </IconButton>
          </CardActions>
        </div>
        <div>
            <CardActionArea className='cardHomeTurism_link'>
              <Link to={link}>
                <Typography variant='h7' gutterBottom className='cardHomeTurism_title' color='black' >{cardTitle}</Typography>
                <Typography className='cardHomeTurism_description' color='black' >{cardDescription}</Typography>
              </Link>
            </CardActionArea>
        </div>
        <div>
            <CardActions className='cardHomeTurism_CardAction'>
              <div className='cardHomeTurism_IconButton'>
                <Rating name="size-large" defaultValue={star} size="large" />
              </div>
            </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default CardHomeTurism


// import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
// import React from 'react'

// import { Heart, Star1 } from 'iconsax-react'

// import './Assets/styles.css'

// const CardHomeTurism = ({ cardImage, cardTitle, cardDescription }) => {
//   return (
//     <Card className='cardHomeTurism'>
//       <CardActionArea className='cardHomeTurism_ActionArea'>
//         <div className='cardHomeTurism_media'>
//           <CardMedia component='img' className='cardHomeTurismImg' image={cardImage} alt={cardTitle}/>
//           <CardActions className='cardHomeTurism_heart'>
//             <IconButton className='cardHomeTurism-heart_IconButton'>
//               <Heart size="32" color="white"/>
//             </IconButton>
//           </CardActions>
//         </div>
//         <CardContent>
//             <Typography variant='h7' gutterBottom className='cardHomeTurism_title' >{cardTitle}</Typography>
//             <Typography className='cardHomeTurism_description'>{cardDescription}</Typography>
//             <CardActions className='cardHomeTurism_CardAction'>
//               <IconButton className='cardHomeTurism_IconButton'>
//                 <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
//               </IconButton>
//               <IconButton className='cardHomeTurism_IconButton'>
//                 <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
//               </IconButton>
//               <IconButton className='cardHomeTurism_IconButton'>
//                 <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
//               </IconButton>
//               <IconButton className='cardHomeTurism_IconButton'>
//                 <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
//               </IconButton>
//               <IconButton className='cardHomeTurism_IconButton'>
//                 <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
//               </IconButton>
//             </CardActions>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   )
// }

// export default CardHomeTurism