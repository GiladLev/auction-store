import './styles.css'
import styled from 'styled-components'


const SliderExample = () => {
  return (
    <div className='Wrapper'>
        {data.map((row)=>{return(
            <div className='row'>
            {row.map((item)=>{
                return(
                    <div className='col'>
                        {console.log(item)}
                        <h1>{item}</h1>
                    </div>
                )
            })}
            </div>
        )
        })}
    </div>
  )
}

export default SliderExample