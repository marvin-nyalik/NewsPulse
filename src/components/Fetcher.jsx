import useFetch from '../hooks/useFetch';

const Fetcher = () => {
  const { data: blogs, loading, error } = useFetch('')

  if (loading) {
    return (
      <>
        <h1>Loading</h1>  
      </>
    )
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {blogs && <p>Data: {JSON.stringify(blogs)}</p>}
    </>
  )
}

export default Fetcher;
