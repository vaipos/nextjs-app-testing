'use client'
import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function MyComponent(): JSX.Element {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [inputValues, setInputValues] = useState<number[]>(new Array(14).fill(0));

  useEffect(() => {
    async function loadModel() {
      const modelUrl = '/model.json';
      const loadedModel = await tf.loadLayersModel(modelUrl);
      setModel(loadedModel);
    }

    loadModel();
  }, []);

  function makePrediction(inputs: number[]): void {
    if (model) {
      const output = model.predict(tf.tensor2d([inputs])) as tf.Tensor;
      const predictionValue = output.dataSync()[0]; // Get index of maximum value
      setPrediction(predictionValue);
    }
  }

  function handleInputChange(index: number, value: number): void {
    setInputValues(prevState => {
      const newInputValues = [...prevState];
      newInputValues[index] = value;
      return newInputValues;
    });
  }

  function handlePrediction(): void {
    makePrediction(inputValues);
  }

  return (
    <div>
      {inputValues.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          onChange={(e) => handleInputChange(index, Number(e.target.value))}
        />
      ))}
      <button onClick={handlePrediction}>Predict</button>
      {prediction !== null && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default MyComponent;
