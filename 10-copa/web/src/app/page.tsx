import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

type DataProps = {
  count: number;
};

export default function Home(props: DataProps) {
  return (
    <>
      <h1></h1>
      <Button>Hello</Button>
      <Input name="name" />
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3333/pools/count");
//   const data = await res.json();

//   console.log(data);

//   return {
//     props: {
//       count: data.count
//     }
//   };
// };
