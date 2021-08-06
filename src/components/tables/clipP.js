import React from "react";
import './tables.css';

const ClipP = ( ) => {
    return (
        <div className="myTable">
        <table>
            <thead>
                <tr>
                    <td rowSpan={2}>Наименование</td>
                    <td rowSpan={2}>Допускаемая нагрузка, кН (тс)</td>
                    <td colSpan={7}>Размер, мм</td>
                    <td rowSpan={2}>Масса, кг</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>D</td>
                    <td>d</td>
                    <td>d1</td>
                    <td>H</td>
                    <td>H1</td>
                    <td>L*</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>P-1</td>
                    <td>1 (0.1)</td>
                    <td>18</td>
                    <td>16</td>
                    <td>6</td>
                    <td>8</td>
                    <td>35</td>
                    <td>52</td>
                    <td>42</td>
                    <td>0.06</td>
                </tr>
                <tr>
                    <td>P-2</td>
                    <td>2 (0.2)</td>
                    <td>22</td>
                    <td>19</td>
                    <td>8</td>
                    <td>10</td>
                    <td>45</td>
                    <td>66</td>
                    <td>51</td>
                    <td>0.11</td>
                </tr>
                <tr>
                    <td>P-3</td>
                    <td>3 (0.3)</td>
                    <td>28</td>
                    <td>24</td>
                    <td>9</td>
                    <td>12</td>
                    <td>55</td>
                    <td>80</td>
                    <td>60</td>
                    <td>0.16</td>
                </tr>
                <tr>
                    <td>P-5</td>
                    <td>5 (0.5)</td>
                    <td>32</td>
                    <td>31</td>
                    <td>13</td>
                    <td>16</td>
                    <td>65</td>
                    <td>98</td>
                    <td>75</td>
                    <td>0.41</td>
                </tr>
                <tr>
                    <td>P-8</td>
                    <td>8 (0.8)</td>
                    <td>40</td>
                    <td>36</td>
                    <td>16</td>
                    <td>20</td>
                    <td>94</td>
                    <td>134</td>
                    <td>93</td>
                    <td>0.77</td>
                </tr>
                <tr>
                    <td>P-12</td>
                    <td>12 (0.12)</td>
                    <td>48</td>
                    <td>40</td>
                    <td>20</td>
                    <td>24</td>
                    <td>114</td>
                    <td>160</td>
                    <td>112</td>
                    <td>1.32</td>
                </tr>
                <tr>
                    <td>P-16</td>
                    <td>16 (0.16)</td>
                    <td>56</td>
                    <td>57</td>
                    <td>24</td>
                    <td>27</td>
                    <td>128</td>
                    <td>186</td>
                    <td>132</td>
                    <td>2.31</td>
                </tr>
                <tr>
                    <td>P-20</td>
                    <td>20 (2.0)</td>
                    <td>66</td>
                    <td>65</td>
                    <td>28</td>
                    <td>33</td>
                    <td>145</td>
                    <td>212</td>
                    <td>153</td>
                    <td>3.58</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};

export default ClipP;