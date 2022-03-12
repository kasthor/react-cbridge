import React, { useState } from "react";

import { useCBridge } from "react-cbridge";

const App = () => {
  const {
    estimateAmount,
    transferAmount,
    transferConfigs,
    availableAmountToTransfer,
    isApproved,
    doApproval
  } = useCBridge();
  const [amount, setAmount] = useState(0);
  const [estimated, setEstimated] = useState(0);

  const handleAmountChange = ({ target: { value } }) =>
    setAmount(parseFloat(value));

  const currentTransferSettings = () => ({
    sourceChainId: 97,
    destinationChainId: 4002,
    tokenSymbol: "USDT",
    userAddress: "0x795a70E87d6A56c5323B36D5d52317d58d5CC2B3",
    slippageTolerance: 3000,
    amount,
  });

  const handleEstimateAmount = async () => {
    const estimate = await estimateAmount(currentTransferSettings());

    console.log(estimate);

    setEstimated(estimate.amountInDestination);
  };

  const handleRequestConfig = async () => {
    const configs = await transferConfigs();

    console.log(configs);
  };

  const handleTransfer = async () => {
    const transfer = await transferAmount(currentTransferSettings());

    console.log(transfer);
  };

  const handleAvailableAmount = async () => {
    const amount = await availableAmountToTransfer(currentTransferSettings());

    console.log(amount);
  };

  const handleApproved= async () => {
    console.log( await isApproved(currentTransferSettings()) )
  }

  const handleApproval= async () => {
    console.log( await doApproval(currentTransferSettings()) )
  }


  return (
    <div>
      <input onChange={handleAmountChange} value={amount} />
      <input type="submit" onClick={handleEstimateAmount} />
      <dl>
        <dt>Estimate</dt>
        <dd>{estimated}</dd>
      </dl>
      <input type="submit" onClick={handleRequestConfig} value="Request Configuration" />
      <input type="submit" onClick={handleTransfer} value="Do Transfer"/>
      <input type="submit" onClick={handleAvailableAmount} value="Available Amount"/>
      <input type="submit" onClick={handleApproved} value = "Approved" />
      <input type="submit" onClick={handleApproval} value = "Approval" />
    </div>
  );
};

export default App;
