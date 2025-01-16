import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import your Firebase config

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component is unmounted
    };
  }, []);

  // ... rest of your component code ...
  return (
    <div>
      {user ? <p>User is signed in: {user.uid}</p> : <p>User is signed out</p>}
    </div>
  );
}

export default MyComponent;