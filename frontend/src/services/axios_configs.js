import axios from "axios"

export const postLogin = async ( metadata, config ) => axios.post(
                                                                    "http://localhost:3500/users/login", 
                                                                    metadata,
                                                                    config
                                                                  )

export const postRegister = async ( metadata, config ) => axios.post(
                                                                      "http://localhost:3500/users/register", 
                                                                      metadata,
                                                                      config
                                                                    )

export const getProfile = async ( config ) => axios.get("http://localhost:3500/users/user", config)