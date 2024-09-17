const calculateUserStats = (users) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  //  Filter active users
  const activeUsers = users.filter(user =>
      user.posts.some(post => new Date(post.timestamp) >= oneWeekAgo)
  );

  //  Extracting popular posts from active users
  const popularPostsByUser = activeUsers.map(user => {
      const popularPosts = user.posts.filter(post => 
          new Date(post.timestamp) >= oneWeekAgo && post.likes >= 10
      );
      return {
          userId: user.id,
          posts: popularPosts
      };
  });

  //  Calculating total popular posts and average likes per user
  const result = popularPostsByUser.reduce((acc, user) => {
      const totalLikes = user.posts.reduce((sum, post) => sum + post.likes, 0);
      const postCount = user.posts.length;

      acc.totalLikes += totalLikes;
      acc.totalPopularPosts += postCount;
      if (postCount > 0) acc.activeUsersWithPosts += 1;

      return acc;
  }, {
      totalLikes: 0,
      totalPopularPosts: 0,
      activeUsersWithPosts: 0
  });

  
  const averageLikesPerUser = result.activeUsersWithPosts > 0 
      ? result.totalLikes / result.activeUsersWithPosts 
      : 0;

  return {
      activeUsersCount: activeUsers.length,
      totalPopularPosts: result.totalPopularPosts,
      averageLikesPerUser: averageLikesPerUser  
  };
};


const users = [
{
  id: 1,
  name: "John",
  location: "New York",
  friends: [2, 3, 4],
  posts: [
    { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
    { content: "Loving the vibes in NYC!", timestamp: "2024-09-15T08:30:00", likes: 8 },
    { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-05T17:45:00", likes: 20 }
  ]
},
{
  id: 2,
  name: "Alice",
  location: "San Francisco",
  friends: [1, 3],
  posts: [
    { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
    { content: "Enjoying the sunny weather!", timestamp: "2024-09-14T11:10:00", likes: 6 }
  ]
},
{
  id: 3,
  name: "Emily",
  location: "Los Angeles",
  friends: [1, 2, 4],
  posts: [
    { content: "Beach day in LA!", timestamp: "2024-09-08T09:45:00", likes: 25 },
    { content: "Exploring Hollywood!", timestamp: "2024-09-16T16:55:00", likes: 5 }
  ]
},
{
  id: 4,
  name: "David",
  location: "Chicago",
  friends: [2],
  posts: [
    { content: "Deep dish pizza is the best!", timestamp: "2024-09-11T10:30:00", likes: 18 },
    { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-13T20:00:00", likes: 3 }
  ]
},
{
  id: 5,
  name: "Sarah",
  location: "Seattle",
  friends: [3, 1],
  posts: [
    { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-09T15:15:00", likes: 9 },
    { content: "Exploring the Olympic National Park!", timestamp: "2024-09-14T07:00:00", likes: 11 }
  ]
}
];

console.log(calculateUserStats(users));



  
  
