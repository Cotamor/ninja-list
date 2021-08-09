export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  console.log(ninja);
  const { name, email, address, website } = ninja;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
      <p>{address.city}</p>
    </div>
  );
};

export default Details;
