import _ from "lodash";

const data = [
  {
    username: "john",
    role: "admin",
  },
  {
    username: "jane",
    role: "seller",
  },
  {
    username: "joe",
    role: "seller",
  },
  {
    username: "jim",
    role: "customer",
  }
]


const rta  = _.groupBy(data, (item) => item.role);
console.log(rta);
