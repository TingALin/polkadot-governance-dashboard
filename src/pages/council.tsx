import Header from "../library/header";

const Council = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    )
};

export default Council;