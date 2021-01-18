import React, {useEffect, useState, useContext} from 'react';
import PropTypes from "prop-types";
import {Button, Colors} from '../Styling';
import {Break} from '../Responsive'
import {Row, Column, Grid, Div} from '../Sections'
import {H4, H3, Paragraph} from '../Heading'
import {navigate} from "gatsby"
import styled from 'styled-components';
import Icon from "../Icon"
import {SessionContext} from '../../session.js'

const ChooseYourProgram = (props) => {
    return (
        <Grid columns="3" columns_sm="1">
            {Array.isArray(props.programs) && props.programs.map((program, i) => {
                return (
                    <Div
                        key={i}
                        display="flex"
                        flexDirection="column"
                        height="245px"
                        borderRadius="3px"
                        padding="1rem"
                        style={{border: "1px solid black", borderTop: "6px solid black", position: "relative"}}
                    >
                        <Div
                            display="flex"
                            justifyContent="end"
                        >
                            <Icon icon={program.icon} width="119px" height="72px" />
                        </Div>
                        <Div
                            display="flex"
                            flexDirection="column"
                        >
                            <H4
                                uppercase
                                align="left"
                                fontSize="15px"
                                lineHeight="19px"
                                letterSpacing="0.05em"
                                color={Colors.darkGray}
                                margin="0 0 10px 0"
                            >
                                {program.sub_title}
                            </H4>
                            {program.title.split("\n").map((m, i) =>
                                <H3
                                    align="left"
                                    fontSize="22px"
                                    lineHeight="26px"
                                >
                                    {m}
                                </H3>
                            )}
                            {program.description.split("\n").map((m, i) =>
                                <Paragraph
                                    fontSize="15px"
                                    lineHeight="19px"
                                    fontWeight="400"
                                    margin="10px 0 0 0"
                                >{m}</Paragraph>
                            )}
                        </Div>
                        <Icon style={{position: "absolute", bottom: "35px", right: "27px"}} icon="arrowright" height="32px" width="32px" />
                    </Div>
                )
            })}
        </Grid>
    )
};

export default ChooseYourProgram;