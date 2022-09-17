import Header from "../library/header";

const Page1 = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    )
};

export default Page1;