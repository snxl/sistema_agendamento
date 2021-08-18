import axios from "axios"

export const postLogin = async ( metadata, config ) => axios.post(
                                                                    "http://localhost:3500/users/login", 
                                                                    metadata,
                                                                    config
                                                                  )