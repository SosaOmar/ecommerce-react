import React, { useState } from 'react'

const Slicer = ({ productInfo }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const countImgs = productInfo?.productImgs.length;

    const nextImg = () => {
        setCurrentImg(currentImg === countImgs - 1 ? 0 : currentImg + 1)
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? countImgs - 1 : currentImg - 1)
    }

    return (
        <div className='slice-container'>
            <button onClick={prevImg} className='slice-btn slider__btn'> <i className="fi fi-rr-arrow-small-left"></i></button>
            <div className="todas">
                {
                    productInfo?.productImgs.map((img, index) => {
                        return (
                            <div key={index} className={currentImg == index ? "slice active" : "slice"}>
                                {currentImg === index && (
                                    <img key={index} src={img} className="slice__img" />
                                )}
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={nextImg} className='slice-btn slider__btn'> <i className="fi fi-rr-arrow-small-right"></i> </button>
        </div>
    )
}

export default Slicer

