import React from 'react';
import {Card} from "antd";
import NumberFormat from "react-number-format";

const GlobalCard = (props) => {
    return (
        <div>
            <Card title={props.title} bordered={false}>
                <NumberFormat
                    value={props.statisticsValue}
                    displayType={"text"}
                    thousandSeparator={true}
                />
            </Card>
        </div>
    );
};

export default GlobalCard;