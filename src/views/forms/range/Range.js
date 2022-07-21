import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CFormRange,
  CCardImage,
  CFormInput,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
  CRow,
  CButton,
} from "@coreui/react";

import { DocsExample } from "src/components";
import { Link } from "react-router-dom";
import FormControl from "../form-control/FormControl";
const Range = () => {
  return (
    <CRow>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Create custom <code>&lt;input type=&#34;range&#34;&gt;</code>{" "}
              controls with <code>&lt;CFormRange&gt;</code>.
            </p>
            <DocsExample href="forms/range">
              <CFormLabel htmlFor="customRange1">Example range</CFormLabel>
              <CFormRange id="customRange1" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> boolean attribute on an input to
              give it a grayed out appearance and remove pointer events.
            </p>
            <DocsExample href="forms/range#disabled">
              <CFormLabel htmlFor="disabledRange">Disabled range</CFormLabel>
              <CFormRange id="disabledRange" disabled />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Min and max</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Range inputs have implicit values for <code>min</code> and{" "}
              <code>max</code>—<code>0</code> and <code>100</code>,
              respectively. You may specify new values for those using the{" "}
              <code>min</code> and <code>max</code> attributes.
            </p>
            <DocsExample href="forms/range#min-and-max">
              <CFormLabel htmlFor="customRange2">Example range</CFormLabel>
              <CFormRange min="0" max="5" defaultValue="3" id="customRange2" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Steps</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              By default, range inputs &#34;snap&#34; to integer values. To
              change this, you can specify a <code>step</code> value. In the
              example below, we double the number of steps by using{" "}
              <code>step=&#34;0.5&#34;</code>.
            </p>
            <DocsExample href="forms/range#steps">
              <CFormLabel htmlFor="customRange3">Example range</CFormLabel>
              <CFormRange
                min="0"
                max="5"
                step="0.5"
                defaultValue="3"
                id="customRange3"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
      <CCard style={{ width: "35rem", margin: "auto" }}>
        <CCardImage
          className=" mt-3  mb-3"
          src="https://images.unsplash.com/photo-1555696958-c5049b866f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <CCardBody>
          <CCardTitle>Church Name</CCardTitle>
          <CCardText>Church description goes here as a full of para</CCardText>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>Address 2</CListGroupItem>
          <CListGroupItem>City</CListGroupItem>
          <CListGroupItem>Pincode</CListGroupItem>
          <CListGroupItem>URL</CListGroupItem>
        </CListGroup>
        <CCardBody>
          <Link to="/forms/form-control">
            <CButton className="btn btn-warning">Edit</CButton>
          </Link>
          <span> </span>
          <CButton>Cancel</CButton>
          {/* <CCardLink href="#">Another link</CCardLink> */}
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default Range;
