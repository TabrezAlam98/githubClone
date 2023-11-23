import React from 'react'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.main}>
        <div className={style.box1}>
            <h1>Let’s build from here</h1>
            <p>The world’s leading AI-powered developer platform.</p>
            <div className={style.inputBox}>
                <div className={style.input}>
                    <input  placeholder='Enter.......'/>
                    <button>signup for GitHub</button>
                </div>
                <div className={style.btn}>
                    <button>start a free enterprise trial</button>
                </div>
            </div>
        </div>

        <div className={style.box2}>
            <p>Trusted by the world’s leading organizations ↘︎</p>
            <div className={style.logoBox}>
         <img src='https://github.githubassets.com/assets/3m-0151c2fda0ce.svg'/>
         <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
         <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
         <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="" />
         <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
         <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home