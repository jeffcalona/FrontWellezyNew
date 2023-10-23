import React from 'react'
import { Link } from 'react-router-dom'
import CirugiaCorporalImg from './Assets/Img/cardiologia.jpg'
import CirugiaFacialImg from './Assets/Img/CirugiaFacialImg.png'
import CirugiaMamariaImg from './Assets/Img/odontologia.jpg'
import TatamientoCapilarImg from './Assets/Img/TatamientoCapilarImg.jpeg'
import TratamientoFacialImg from './Assets/Img/TratamientoFacialImg.jpeg'
import TratamientoCorporalImg from './Assets/Img/TratamientoCorporalImg.jpeg'
import EsteticaVaginalImg from './Assets/Img/oncologia.jpg'
import './Assets/styles.css'

const HomeProcedures = () => {
  return (
      <div className='homeProcedures'>
        <div className='homeProcedures_row1'>
            <div className='homeProcedures-row1_width30 margin_rightBottom'>
                <Link to='/procedures' className='procedureHome_info'>
                    <h1>elije el procedimiento adecuedo para ti</h1>
                    <p>En esta sección encontrarás información detallada sobre cada procedimiento con técnicas exclusivas realizadas por especialistas certificados y con tecnología avanzada.</p>
                </Link>
            </div>
            <div className='homeProcedures-row1_width35 margin_rightBottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={CirugiaMamariaImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>Odontología</h3>
                    <p>6 Procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='#'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row1_width35 margin_bottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={CirugiaFacialImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>Oftalmología</h3>
                    <p>5 procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='#'>más detalles</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='homeProcedures_row2'>
            <div className='homeProcedures-row2_width30 margin_right cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '103.4%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '103.4%' }}>
                    <img src={CirugiaCorporalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>Cardiología</h3>
                    <p>6 procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='#'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_rightBottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={EsteticaVaginalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>oncología</h3>
                        <p>2 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='#'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 margin_right cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TatamientoCapilarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>tratamientos capilares</h3>
                        <p>2 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='#'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_bottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TratamientoCorporalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>ginecología</h3>
                        <p>9 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='#'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TratamientoFacialImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>tratamientos facieales</h3>
                        <p>6 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='#'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default HomeProcedures

// import React from 'react'
// import { Link } from 'react-router-dom'
// import CirugiaCorporalImg from './Assets/Img/CirugiaCorporalImg.jpg'
// import CirugiaFacialImg from './Assets/Img/CirugiaFacialImg.png'
// import CirugiaMamariaImg from './Assets/Img/CirugiaMamariaImg.png'
// import TatamientoCapilarImg from './Assets/Img/TatamientoCapilarImg.jpeg'
// import TratamientoFacialImg from './Assets/Img/TratamientoFacialImg.jpeg'
// import TratamientoCorporalImg from './Assets/Img/TratamientoCorporalImg.jpeg'
// import EsteticaVaginalImg from './Assets/Img/EsteticaVaginalImg.png'

// const procedures = [
//     {title: 'cirugía corporal', description: '6 procedimientos', link: '/procedure/bodysurgery', img: CirugiaCorporalImg},
//     {title: 'cirugías mamarias', description: '3 procedimientos', link: '/procedure/breastsurgery', img: CirugiaMamariaImg},
//     {title: 'estética vaginal', description: '2 procedimientos', link: '/procedure/vaginalesthetic', img: EsteticaVaginalImg},
//     {title: 'tratamientos capilares', description: '2 procedimientos', link: '/procedure/capillarytreatment', img: TatamientoCapilarImg},
//     {title: 'cirugías faciales', description: '5 procedimientos', link: '/procedure/capillarytreatment', img: CirugiaFacialImg},
//     {title: 'tratamientos corporales', description: '9 procedimientos', link: '/procedure/bodytreatment', img: TratamientoCorporalImg},
//     {title: 'tratamientos faciales', description: '6 procedimientos', link: '/procedure/facialtreatment', img: TratamientoFacialImg}
// ]

// const HomeProcedures = () => {
//   return (
//       <div>
//           <div>
//               <div>
//                   <Link to='/procedures'>
//                       <h1>elije el procedimiento adecuedo para ti</h1>
//                       <p>En esta sección encontraras información detallada de cada procedimiento con nuestras técnicas quirúrgicas más avanzadas.</p>
//                       <div>
//                           <Link to='hola'>más detalles</Link>
//                       </div>
//                   </Link>
//               </div>
//               <div>
//                   <Link to='/procedure/bodysurgery'>
//                       <div>
//                           <img src={CirugiaCorporalImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>cirugía corporal</h3>
//                           <p>6 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//           </div>
//           <div>
//               <div>
//                   <Link to='/procedure/breastsurgery'>
//                       <div>
//                           <img src={CirugiaMamariaImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>cirugías mamarias</h3>
//                           <p>3 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//               <div>
//                   <Link to='/procedure/vaginalesthetic'>
//                       <div>
//                           <img src={EsteticaVaginalImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>estética vaginal</h3>
//                           <p>2 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//               <div>
//                   <Link to='/procedure/capillarytreatment'>
//                       <div>
//                           <img src={TatamientoCapilarImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>tratamientos capilares</h3>
//                           <p>2 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//           </div>
//           <div>
//               <div>
//                   <Link to='/procedure/facialsurgery'>
//                       <div>
//                           <img src={TratamientoFacialImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>cirugías faciales</h3>
//                           <p>5 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//               <div>
//                   <Link to='/procedure/bodytreatment'>
//                       <div>
//                           <img src={TratamientoCorporalImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>tratamientos corporales</h3>
//                           <p>9 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//               <div>
//                   <Link to='/procedure/facialtreatment'>
//                       <div>
//                           <img src={TratamientoFacialImg} alt="" />
//                       </div>
//                       <div>
//                           <h3>tratamientos faciales</h3>
//                           <p>6 procedimientos</p>
//                           <div>
//                               <Link to='hola'>más detalles</Link>
//                           </div>
//                       </div>
//                   </Link>
//               </div>
//           </div>
//       </div>
//     )
// }
// export default HomeProcedures