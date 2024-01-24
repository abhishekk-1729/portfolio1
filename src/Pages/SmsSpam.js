import React from 'react'

export default function SmsSpam() {
  return (
    <>
      <div className="projectDescription">
            <h1>
                SMS Spam Classifier
            </h1>
            <div className="projectImg">
                <img src="/images/smsspam.png" alt="loading" height="500" width ="1000" />
            </div>
            <p className='text'>
              Link to the dataset used is <a href="https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset" target="_blank">Dataset</a>
            </p>
            <p className='text'>
              Gtihub Repo: <a href="https://github.com/abhishekk-1729/sms-spam-classifier" target="_blank">Github Repo</a>
            </p>
            <p className="subheading">
                Description
            </p>
            <p className="text">
                Developed a sms classifier to identify message whether it's a spam or a normal message. Built machine learning model which is running at 96 percentage accuracy.
            </p>

        </div>
    </>
  )
}
