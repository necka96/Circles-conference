import { faker } from "@faker-js/faker";
import Image from "./constants/Image";
const speakers = [
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person1,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person2,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person3,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person4,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person5,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person6,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person7,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person8,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person9,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person10,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person11,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person12,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName({ sex: "female" }),
    image: Image.person13,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person14,
    job: faker.name.jobTitle(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    image: Image.person15,
    job: faker.name.jobTitle(),
  },
];

export default speakers;
