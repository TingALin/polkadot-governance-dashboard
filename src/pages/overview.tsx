import Header from "../library/header";

const Overview = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    )
};

export default Overview;