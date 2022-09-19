import Header from "../library/header";
/*
tab overview
1. min deposit for a proposal: 5 Units/DOTs
2. 

a. crate proposal/submit preimage
b. support proposal
c. vote for a referndum

tab all proposals
*/
const Proposals = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    );
};

export default Proposals;