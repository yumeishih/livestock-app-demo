import React from 'react'
import PropTypes from 'prop-types'
import DropDown from 'Components/element/dropDown'
import Input from 'Components/element/input'
import CheckBox from 'Components/element/checkBox'
import TextArea from 'Components/element/textArea'

const BreedingRecordSection = ({ index }) => (
  <div className="section">
    <div className="row text-center"><h5>Record {index}</h5></div>
    <div className="row content">
      <div className="col-sm-6"><Input labelString="Date of Mating" /></div>
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
    </div>
    <div className="row content">
      <div className="col-sm-6"><Input labelString="Ear tag number" /></div>
      <div className="col-sm-6"><Input labelString="No. of Flock" /></div>
    </div>
    <div className="row content">
      <div className="col-sm-6">
        <DropDown
          labelString="Breeding Method"
          options={[
            'Natural',
            'AI',
            'ET'
          ]}
        />
      </div>
    </div>
    <div className="row content">
      <div className="col-sm-6"><Input labelString="Ram ear tag number" /></div>
    </div>
    <div className="row content">
      <div className="col-sm-12"><Input labelString="Expected date of parturition" /></div>
    </div>
  </div>
)

BreedingRecordSection.propsType = {
  index: PropTypes.number
}

const LambingParentRecordElement = (title) => (
  <div className="row" key={title}>
    <br />
    <div className="col-sm-1 hight-light">{title}</div>
    <div className="col-sm-11">
      <div className="row">
        <div className="col-sm-4">
          <DropDown
            labelString="Breed"
            options={[
              'Dorper',
              'Katahdin',
              'Barbados Blackbelly'
            ]}
          />
        </div>
        <div className="col-sm-4"><Input labelString="Ear tag" /></div>
        <div className="col-sm-4"><Input labelString="Breeding date" /></div>
      </div>
      <div className="row">
        <div className="col-sm-2"><Input labelString="Laming date" /></div>
        <div className="col-sm-3">
          Lambing number
          <DropDown
            labelString="Female"
            options={[
              '1',
              '2',
              '3'
            ]}
          />
          <DropDown
            className="gender"
            labelString="Male"
            options={[
              '1',
              '2',
              '3'
            ]}
          />
        </div>
        <div className="col-sm-3">
          Survival number
          <DropDown
            labelString="Female"
            options={[
              '1',
              '2',
              '3'
            ]}
          />
          <DropDown
            className="gender"
            labelString="Male"
            options={[
              '1',
              '2',
              '3'
            ]}
          />
        </div>
        <div className="col-sm-2"><Input labelString="Total" /></div>
      </div>
    </div>
  </div>
)

const LambingRecordSection = ({ index }) => (
  <div className="row">
    <div className="col-sm-1">No. {index}</div>
    <div className="col-sm-3"><Input labelString="Lamb ear tag" /></div>
    <div className="col-sm-3">
      <DropDown
        labelString="Gender"
        options={[
          'Female',
          'Male'
        ]}
      />
    </div>
    <div className="col-sm-3"><Input labelString="Birth weight" /></div>
    <div className="col-sm-2"><Input labelString="note" /></div>
  </div>
)

const LambingParentRecord = () => (
  <div className="section">
    {['Sire', 'Dam'].map((ele) => (LambingParentRecordElement(ele)))}
    <br />
    <DropDown
      labelString="Breeding Method"
      options={[
        'Natural',
        'AI',
        'ET'
      ]}
    />
    <div className="section">
      {[...Array(4)].map((ele, index) => (<LambingRecordSection index={index + 1} key={`section_${index}`} />))}
    </div>
  </div>
)

const Record = () => {
  return (
    <div id="record" className="container">
      <h3 className="text-center">Ewe Breeding Card</h3>
      <div className="registration-form">
        <h5 className="text-center ">Basic Information</h5>
        <div className="row">
          <div className="col-sm-6">
            <Input labelString="Number of Mating Card" />
            <Input labelString="Owner" />
            <Input labelString="Address" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"><Input labelString="Sire" /></div>
          <div className="col-sm-4"><Input labelString="Dam" /></div>
          <div className="col-sm-4"><Input labelString="Birth Date" /></div>
        </div>
        <div className="row">
          <div className="col-sm-4"><Input labelString="Birth Weight" /></div>
          <div className="col-sm-4"><Input labelString="No. of Flock" /></div>
          <div className="col-sm-4"><Input labelString="Reg. No" /></div>
        </div>
        {[...Array(2)].map((ele, index) => (<BreedingRecordSection index={index + 1} key={`section_${index}`} />))}
        <p><i className="fa fa-hand-o-up" /> Note: The ewe mating card shall submit in 7 days since the mating has been made.</p>
      </div>
      <br /><br />
      <h3 className="text-center">Lambing Record</h3>
      <div className="registration-form">
        <h5 className="text-center ">Basic Information</h5>
        <div className="row">
          <div className="col-sm-4"><Input labelString="Owner" /></div>
          <div className="col-sm-4"><Input labelString="Address" /></div>
          <div className="col-sm-4"><Input labelString="Farm ID" /></div>
        </div>
        <br />
        <LambingParentRecord />
      </div>
    </div>
  )
}

export default Record
