import { useState } from 'react'
import style from '../Form/Form.module.css'

const Form = () => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [msg, setmsg] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("submitted")
        setfname('')
        setlname('')
        setphone('')
        setemail('')
        setmsg('')
    }

    return (
        <div className={style.main}>
            <h1><span>Connect</span> with me</h1>
            <p>Please share your details and we'll be in touch soon</p>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className={style.row1}>
                    <div className={style.row1_cont}>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={fname} onChange={(e) => {
                            setfname(e.target.value)
                        }} />
                    </div>
                    <div className={style.row1_cont}>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={lname} onChange={(e) => {
                            setlname(e.target.value)
                        }} />
                    </div>
                </div>
                <div className={style.row1}>
                    <div className={style.row1_cont}>
                        <label htmlFor="">Phone No.</label>
                        <input type="number" value={phone} onChange={(e) => {
                            setphone(e.target.value)
                        }} />
                    </div>
                    <div className={style.row1_cont}>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                    </div>
                </div>
                <div className={style.row1}>
                    <div className={style.row1_cont1}>
                        <label htmlFor="">Messagge</label>
                        <textarea name="" id="" cols="30" rows="5" value={msg} onChange={(e) => {
                            setmsg(e.target.value)
                        }} />
                    </div>
                </div>
                <div className={style.row1}>
                    <div className={style.row1_cont1}>
                        <button>Submit</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form 