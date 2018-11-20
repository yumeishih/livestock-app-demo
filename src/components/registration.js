import React from 'react'
import DropDown from 'Components/element/dropDown'
import Input from 'Components/element/input'
import CheckBox from 'Components/element/checkBox'
import TextArea from 'Components/element/textArea'

const Registration = () => {
  return (
    <div id="registration" className="container">
      <h3 className="text-center">Breeding Sheep Registration</h3>
      <div className="registration-form">
        <h5 className="text-center ">Basic Information</h5>
        <div className="row">
          <div className="col-sm-6">
            <Input labelString="Owner" />
            <Input labelString="Phone" />
            <Input labelString="Address" />
            <CheckBox labelString="Breeder" options={['Yes', 'No']} />
          </div>
          <div className="col-sm-6">
            <DropDown
              labelString="Item"
              options={[
                'Blood registry',
                'Basic registry',
                'Confirm registry',
                'Reconfirm registry',
                'Breeding sheep certification'
              ]}
            />
          </div>
        </div>
        <div className="section">
          <div className="row"><h5 className="col-sm-8">I. Identification</h5></div>
          <div className="row content">
            <div className="col-sm-6"><Input labelString="Name" /></div>
            <div className="col-sm-6"><Input labelString="Ear tag" /></div>
          </div>
          <div className="row content">
            <div className="col-sm-6">
              <DropDown
                labelString="Breed"
                options={[
                  'Dorper',
                  'Katahdin',
                  'Barbados Blackbelly'
                ]}
              />
            </div>
            <div className="col-sm-6">
              <DropDown
                labelString="Sex"
                options={[
                  'Male',
                  'Female'
                ]}
              />
            </div>
          </div>
          <div className="row"><h5 className="col-sm-8">II. Source</h5></div>
          <div className="row content">
            <div className="col-sm-6">
              <CheckBox labelString="Import" radioType="radio" options={['Registered Sire', 'Registered Dam']} />
            </div>
            <div className="col-sm-6">
              <Input labelString="Date of birth" />
              <DropDown
                labelString="Country"
                options={[
                  'USA',
                  'Mexico',
                  'Costa Rica',
                  'Panama',
                  'Barbados'
                ]}
              />
              <Input labelString="Past ear tag" />
            </div>
          </div>
          <div className="row"><h5 className="col-sm-8">III. Exterior</h5></div>
          <div className="row content">
            <div className="col-sm-6"><Input labelString="Normal appearance" /></div>
            <div className="col-sm-6"><Input labelString="Breed Feature" /></div>
          </div>
          <div className="row content">
            <div className="col-sm-6"><Input labelString="Reproductive feature" /></div>
            <div className="col-sm-6"><Input labelString="Average Appraisal Score" /></div>
          </div>
          <br />
          <div className="row"><h5 className="col-sm-8">IV. Body measurements</h5></div>
          <div className="row content">
            <div className="col-sm-6"><Input labelString="Body length" /></div>
            <div className="col-sm-6"><Input labelString="Thoracic girth" /></div>
          </div>
          <div className="row content">
            <div className="col-sm-6"><Input labelString="Height" /></div>
            <div className="col-sm-6"><Input labelString="Body weight (lb)" /></div>
          </div>
          <div className="row"><h5 className="col-sm-8">V. Comment</h5></div>
          <div className="row text-center"><TextArea /></div>
          <div className="row"><h5 className="col-sm-8">VI. Remarks</h5></div>
          <div className="row text-center"><TextArea /></div>
        </div>
      </div>
    </div>
  )
}

export default Registration
