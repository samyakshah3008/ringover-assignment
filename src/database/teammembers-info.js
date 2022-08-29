import { v4 as uuid } from "uuid";
import toni from "../assets/images/tonikroos.jpg";
import zidane from "../assets/images/zidane.jpg";
import james from "../assets/images/james.jpg";
import christiano from "../assets/images/christiano.jpg";
import iker from "../assets/images/ikercasillas.jpg";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";
import medium from "../assets/images/medium.png";
import nba from "../assets/images/nba.png";

export const teamMembers = [
  {
    name: "Zidane",
    domain: "Leadership and management",
    profile: zidane,
    _id: uuid(),
    social: [linkedin, medium, facebook],
  },
  {
    name: "Toni kroos",
    domain: "product developer",
    profile: toni,
    _id: uuid(),
    social: [linkedin, medium],
  },
  {
    name: "Iker Casillas",
    domain: "Marketing strategy",
    profile: iker,
    _id: uuid(),
    social: [medium],
  },
  {
    name: "James",
    domain: "Product designer",
    profile: james,
    _id: uuid(),
    social: [medium, nba],
  },
  {
    name: "Christiano",
    domain: "Financial operations",
    profile: christiano,
    _id: uuid(),
    social: [linkedin, facebook],
  },
];
