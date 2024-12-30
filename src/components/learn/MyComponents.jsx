import './style.css';





const MyComponent = () => {
    const name = 'William Habsburg';
    const object = {
        name: 'William Habsburg',
        age: 25,
        location: 'Helsinki'
    }


    return (
    <>
            <div>Hello {name}</div>
            <div>{JSON.stringify(object)}</div>
            <div>{console.log("Hello William")}</div>
            <div className="child"
            style={{borderRadius: '10px'}}
            >William</div>
    </>
      
    );
  }

export default MyComponent;