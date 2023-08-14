import { useRouter } from "next/router";

const Name = () => {
    const router = useRouter();
    const { name } = router.query;
    console.log(name);
    return <p>Welcome {name}</p>;
};

export default Name;