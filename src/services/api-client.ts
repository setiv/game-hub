import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a19190f90e594d7c9a1fe46852991a1c"
    }
})