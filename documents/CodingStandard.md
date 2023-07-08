# Coding standard and Best practice

This section will help you code according to your team's standard rules and make code review easier.

## I. Coding

### 1. Use JSX ShortHand
Try to use JSX shorthand for passing boolean variables. Let’s say you want to control the title visibility of a Navbar component.

**Bad**
```js
return (
  <Navbar showTitle={true} />
);
```

**Good**
```js
return(
  <Navbar showTitle />  
)
```

### 2. Use Ternary Operators
Let’s say you want to show a user’s details based on role.

**Bad**
```js
const { role } = user;

if(role === ADMIN) {
  return <AdminUser />
}else{
  return <NormalUser />
} 
```

**Good**
```js
const { role } = user;

return role === ADMIN ? <AdminUser /> : <NormalUser />
```

### 3. Take Advantage of Object Literals
**Bad**
```js
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}
```

**Good**
```js
const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```

### 4. Use Fragments
Always use Fragment over View. It keeps the code clean and is also beneficial for performance because one less node is created in the virtual DOM.

**Bad**
```js
return (
  <View>
     <Component1 />
     <Component2 />
     <Component3 />
  </View>  
)
```

**Good**
```js
return (
  <>
     <Component1 />
     <Component2 />
     <Component3 />
  </>  
)
```

### 5. Don't Define a Function Inside Render
Don’t define a function inside render. Try to keep the logic inside render to an absolute minimum.

**Bad**
```js
return (
    <Button onPress={() => {
        setName("");
        setAge(0);
    }}>
      This is a bad example 
    </Button>  
)
```

**Good**
```js
const resetUser = () => {
    setName("");
    setAge(0);
}

return (
  <Button onPress={resetUser}>  
    This is a good example 
  </Button>  
)
```

### 6. Use Object Destructuring
Use object destructuring to your advantage. Let’s say you need to show a user’s details.

**Bad**
```js
return (
  <>
    <Text> {user.name} </Text>
    <Text> {user.age} </Text>
    <Text> {user.profession} </Text>
  </>  
)
```

**Good**
```js
const { name, age, profession } = user;

return (
  <>
    <Text> {user.name} </Text>
    <Text> {user.age} </Text>
    <Text> {user.profession} </Text>
  </>  
)
```

### 7. String Props Don’t Need Curly Braces
When passing string props to a children component.

**Bad**
```js
return(
  <Navbar title={"My Special App"} />
)
```

**Good**
```js
return(
  <Navbar title="My Special App" />  
)
```

### 8. Remove JS Code From JSX
Move any JS code out of JSX if that doesn’t serve any purpose of rendering or UI functionality.

**Bad**
```js
return (
  <ul>
    {posts.map((post) => (
      <li onClick={event => {
        console.log(event.target, 'clicked!'); // <- THIS IS BAD
        }} key={post.id}>{post.title}
      </li>
    ))}
  </ul>
);
```

**Good**
```js
const onClickHandler = () => {
   console.log('onPressed!'); 
}

return (
    {posts.map((post) => (
      <Text onPress={onClickHandler}  key={post.id}> {post.title} </Text>
    ))}
);
```

### 9. Use Template Literals
Use template literals to build large strings. Avoid using string concatenation. It’s nice and clean.

**Bad**
```js
const userDetails = user.name + "'s profession is" + user.proffession

return (
  <Text> {userDetails} </Text>  
)
```

**Good**
```js
const userDetails = `${user.name}'s profession is ${user.proffession}`

return (
  <Text> {userDetails} </Text>  
)
```

### 10. Component Naming
Always use PascalCase for components and camelCase for instances.

**Bad**
```js
import reservationCard from './ReservationCard';

const ReservationItem = <ReservationCard />;
```

**Good**
```js
import ReservationCard from './ReservationCard';

const reservationItem = <ReservationCard />;
```

### 11. Quotes
Use double quotes for JSX attributes and single quotes for all other JS.

**Bad**
```js
<Foo bar='bar' />

<Foo styles={{ padding: "20px" }} />
```

**Good**
```js
<Foo bar="bar" />

<Foo styles={{ padding: '20px' }} />
```

### 12. Prop Naming
Always use camelCase for prop names or PascalCase if the prop value is a React component.

**Bad**
```js
<Component
  UserName="hello"
  phone_number={12345678}
/>
```

**Good**
```js
<MyComponent
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

### 13. Self-Closing Tags
If your component doesn’t have any children, then use self-closing tags. It improves readability.

**Bad**
```js
<SomeComponent variant="stuff"></SomeComponent>
```

**Good**
```js
<SomeComponent variant="stuff" />
```

### 14. Underscore in Method Name
Do not use underscores in any internal React method.

**Bad**
```js
const _onClickHandler = () => {
  // do stuff
}
```

**Good**
```js
const onClickHandler = () => {
  // do stuff
}
```

