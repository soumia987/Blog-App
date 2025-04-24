import { useEffect, useState } from 'react';
import { interval, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const useRxPosts = (url, refreshRate = 5000) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = interval(refreshRate)
      .pipe(
        switchMap(() =>
          fromFetch(url).pipe(response => response.json())
        )
      )
      .subscribe({
        next: (data) => {
          setPosts(data);
          setLoading(false);
        },
        error: (err) => {
          console.error(err);
          setLoading(false);
        }
      });

    return () => subscription.unsubscribe();
  }, [url, refreshRate]);

  return { posts, loading };
};

export default useRxPosts;
