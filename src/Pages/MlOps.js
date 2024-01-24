import React from 'react'

export default function MlOps() {
  return (
    <>
     <div className="projectDescription">
            <h1>
                Satisfaction Predictor
            </h1>
            <div className="projectImg">
                <img src="/images/zenml.png" alt="loading" height="800" width ="1000" />
            </div>
            <p className='text'>
              Gtihub Repo: <a href="https://github.com/abhishekk-1729/MLOps_Project" target="_blank">Github Repo</a>
            </p>
            <p className="subheading">
                Problem Statement
            </p>
            <p className="text">
            Problem statement: For a given customer's historical data, we are tasked to predict the review score for the next order or purchase. We will be using the Brazilian E-Commerce Public Dataset by Olist. This dataset has information on 100,000 orders from 2016 to 2018 made at multiple marketplaces in Brazil. Its features allow viewing charges from various dimensions: from order status, price, payment, freight performance to customer location, product attributes and finally, reviews written by customers. The objective here is to predict the customer satisfaction score for a given order based on features like order status, price, payment, etc. In order to achieve this in a real-world scenario, we will be using ZenML to build a production-ready pipeline to predict the customer satisfaction score for the next order or purchase.
            </p>
            <p className="subheading">
                Solution
            </p>
            <p className='text'>
            In order to build a real-world workflow for predicting the customer satisfaction score for the next order or purchase (which will help make better decisions), it is not enough to just train the model once.

Instead, we are building an end-to-end pipeline for continuously predicting and deploying the machine learning model, alongside a data application that utilizes the latest deployed model for the business to consume.

This pipeline can be deployed to the cloud, scale up according to our needs, and ensure that we track the parameters and data that flow through every pipeline that runs. It includes raw data input, features, results, the machine learning model and model parameters, and prediction outputs. ZenML helps us to build such a pipeline in a simple, yet powerful, way.

In this Project, we give special consideration to the MLflow integration of ZenML. In particular, we utilize MLflow tracking to track our metrics and parameters, and MLflow deployment to deploy our model. We also use Streamlit to showcase how this model will be used in a real-world setting.
            </p>
      
          
        </div> 
    </>
  )
}


