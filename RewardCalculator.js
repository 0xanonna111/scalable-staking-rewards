/**
 * Utility to estimate rewards for UI display
 */
function calculateEstimatedReward(stakedBalance, totalPoolSupply, rewardRate, durationSeconds) {
    if (totalPoolSupply === 0) return 0;
    
    const poolShare = stakedBalance / totalPoolSupply;
    const totalRewardsEmitted = rewardRate * durationSeconds;
    
    return poolShare * totalRewardsEmitted;
}

module.exports = { calculateEstimatedReward };
