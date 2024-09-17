const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];
  
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  function analyzeUsers(users) {
    // Step 1: Filter active users who have posted at least once in the past week
    const activeUsers = users.filter(user =>
      user.posts.some(post => new Date(post.timestamp) > oneWeekAgo)
    );
  
    // Step 2: Extract popular posts from active users with likes >= 10
    const popularPosts = activeUsers.map(user => ({
      ...user,
      popularPosts: user.posts.filter(post =>
        new Date(post.timestamp) > oneWeekAgo && post.likes >= 10
      )
    }));
  
    // Step 3: Calculate the total number of popular posts
    const totalPopularPosts = popularPosts.reduce((total, user) => total + user.popularPosts.length, 0);
  
    // Step 4: Calculate total likes for all popular posts
    const totalLikes = popularPosts.reduce((total, user) =>
      total + user.popularPosts.reduce((postLikes, post) => postLikes + post.likes, 0), 0
    );
  
    // Step 5: Calculate average likes per active user
    const averageLikesPerUser = activeUsers.length ? totalLikes / activeUsers.length : 0;
  
    return {
      activeUsersCount: activeUsers.length,
      totalPopularPosts,
      averageLikesPerUser
    };
  }
  
  const result = analyzeUsers(users);
  console.log(result);
  
  
