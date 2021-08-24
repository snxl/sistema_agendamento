import { useEffect, useState } from "react"

import * as s from "./styles.js"
import listImage from "../../assets/list.svg"

import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import pointer from "../../assets/pointer.svg"


export default function Main ( props ) {

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const monthDays ={
        
    }

    const [month, setMonth] = useState()
    const [day, setDay] = useState(1)

    useEffect(()=>{

        const date = new Date()

        setMonth(date.getMonth())

        setDay(date.getDate())

        console.log(month)
        console.log(typeof month)

    }, [])

    function beforeDay(event){

        if(day !== 1)setDay(day - 1)
        if(day === 1) return
    }

    function afterDay(event){

        if(
            (
                month === 0 || 
                month === 2 || 
                month === 4 || 
                month === 6 || 
                month === 7 || 
                month === 9 ||
                month === 11
            )  && 
            day === 31) {

                setDay(1)

                if(month !== 11) return setMonth(month + 1)
                else return setMonth(0)

            }


        if(
            (
                month === 1
            ) && 
            day === 28) 
                return setDay(1)


        if(
            (
                month === 1 || 
                month === 3 || 
                month === 5 || 
                month === 8 || 
                month === 10 || 
                month === 9 ||
                month === 11
            )  && 
            day === 31) {

                setDay(1)

                if(month !== 11) return setMonth(month + 1)
                else return setMonth(0)

            }
        
        if(day !== 31){
            setDay(day + 1)
        }


    }

    return (
        <>

            <s.main>

                <s.section>

                    <s.article>

                        <s.divPagination>

                            <s.btnPag
                                onClick={ () => beforeDay()}
                            >
                                
                                <s.image
                                    src={leftArrow} 
                                />

                            </s.btnPag>

                            <s.day>
                                {day} de {months[month]}
                            </s.day>

                            <s.btnPag
                                onClick={()=> afterDay()}  
                            >

                                <s.image 
                                    src={rightArrow}
                                />    
                                
                            </s.btnPag>

                        </s.divPagination>
                        
                        <s.divContent>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        8H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >



                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>
                            
                                <s.divFullHour>

                                    <s.hour>
                                        9H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        10H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        11H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        12H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        13H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>
                                
                                <s.divFullHour>

                                    <s.hour>
                                        14H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                              <s.divFullHour>

                                <s.hour>
                                        15H
                                </s.hour>

                                <s.pointer src={pointer} />

                              </s.divFullHour>

                              <s.divAppointment
                                appoint={true}
                              >


                              </s.divAppointment>

                            </s.divHour>

                            <s.divHour>

                                <s.divFullHour>

                                    <s.hour>
                                        16H
                                    </s.hour>

                                    <s.pointer src={pointer} />

                                </s.divFullHour>

                                <s.divAppointment
                                    appoint={true}
                                >


                                </s.divAppointment>

                            </s.divHour>

                        </s.divContent>

                        <s.divConfirm>

                        </s.divConfirm>
                    
                    </s.article>

                </s.section>

                <s.listDiv>

                    <s.imageList src={listImage}/>

                </s.listDiv>

            </s.main>

        </>
    )

}