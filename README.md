# Scalable Staking Rewards

This repository implements a production-grade **Liquidity Mining** contract. It uses a mathematical approach to track rewards that avoids the need to iterate through all users, making it highly scalable regardless of the number of stakers.



## Features
* **Pro-rata Distribution**: Rewards are distributed based on the percentage of the pool owned.
* **Pull-based Claims**: Users can claim their earned rewards at any time.
* **Time-consistent**: Rewards are calculated based on the timestamp, ensuring accuracy to the second.

## Mathematical Principle
The contract tracks a `rewardPerTokenStored` variable. When a user interacts with the contract, it calculates the difference between the current global state and the last time the user updated their position:
$$Reward = StakedAmount \times (CurrentRewardPerToken - UserRewardPerTokenPaid)$$

## License
MIT
