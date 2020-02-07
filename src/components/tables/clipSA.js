import React from "react";
import './tables.css';

const ClipSA = () => {
    return (
        <table className="myTable">
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
                    <td>СА-2</td>
                    <td>2 (0.2)</td>
                    <td>12</td>
                    <td>16</td>
                    <td>6</td>
                    <td>8</td>
                    <td>30</td>
                    <td>47</td>
                    <td>37</td>
                    <td>0.04</td>
                </tr>
                <tr>
                    <td>СА-3</td>
                    <td>3 (0.3)</td>
                    <td>13</td>
                    <td>19</td>
                    <td>8</td>
                    <td>10</td>
                    <td>36</td>
                    <td>57</td>
                    <td>43</td>
                    <td>0.08</td>
                </tr>
                <tr>
                    <td>СА-5</td>
                    <td>5 (0.5)</td>
                    <td>16</td>
                    <td>24</td>
                    <td>9</td>
                    <td>12</td>
                    <td>40</td>
                    <td>64</td>
                    <td>49</td>
                    <td>0.13</td>
                </tr>
                <tr>
                    <td>СА-8</td>
                    <td>8 (0.8)</td>
                    <td>20</td>
                    <td>28</td>
                    <td>11</td>
                    <td>16</td>
                    <td>53</td>
                    <td>82</td>
                    <td>61</td>
                    <td>0.25</td>
                </tr>
                <tr>
                    <td>СА-10</td>
                    <td>10 (1.0)</td>
                    <td>22</td>
                    <td>31</td>
                    <td>13</td>
                    <td>16</td>
                    <td>56</td>
                    <td>89</td>
                    <td>68</td>
                    <td>0.36</td>
                </tr>
                <tr>
                    <td>СА-12</td>
                    <td>12 (1.2)</td>
                    <td>22</td>
                    <td>31</td>
                    <td>13</td>
                    <td>18</td>
                    <td>56</td>
                    <td>89</td>
                    <td>68</td>
                    <td>0.38</td>
                </tr>
                <tr>
                    <td>СА-16</td>
                    <td>16 (1.6)</td>
                    <td>25</td>
                    <td>36</td>
                    <td>16</td>
                    <td>20</td>
                    <td>67</td>
                    <td>105</td>
                    <td>79</td>
                    <td>0.51</td>
                </tr>
                <tr>
                    <td>СА-20</td>
                    <td>20 (2.0)</td>
                    <td>30</td>
                    <td>40</td>
                    <td>20</td>
                    <td>22</td>
                    <td>75</td>
                    <td>120</td>
                    <td>96</td>
                    <td>1.00</td>
                </tr>
                <tr>
                    <td>СА-25</td>
                    <td>25 (2.5)</td>
                    <td>32</td>
                    <td>48</td>
                    <td>22</td>
                    <td>24</td>
                    <td>80</td>
                    <td>131</td>
                    <td>104</td>
                    <td>1.38</td>
                </tr>
                <tr>
                    <td>СА-32</td>
                    <td>32 (3.2)</td>
                    <td>38</td>
                    <td>59</td>
                    <td>24</td>
                    <td>27</td>
                    <td>90</td>
                    <td>148</td>
                    <td>116</td>
                    <td>2.17</td>
                </tr>
                <tr>
                    <td>СА-40</td>
                    <td>40 (4.0)</td>
                    <td>42</td>
                    <td>65</td>
                    <td>28</td>
                    <td>30</td>
                    <td>105</td>
                    <td>171</td>
                    <td>131</td>
                    <td>3.07</td>
                </tr>
                <tr>
                    <td>СА-50</td>
                    <td>50 (5.0)</td>
                    <td>45</td>
                    <td>75</td>
                    <td>32</td>
                    <td>36</td>
                    <td>110</td>
                    <td>185</td>
                    <td>147</td>
                    <td>4.25</td>
                </tr>
                <tr>
                    <td>СА-63</td>
                    <td>63 (6.3)</td>
                    <td>52</td>
                    <td>80</td>
                    <td>36</td>
                    <td>39</td>
                    <td>130</td>
                    <td>212</td>
                    <td>165</td>
                    <td>5.78</td>
                </tr>
                <tr>
                    <td>СА-80</td>
                    <td>80 (8.0)</td>
                    <td>60</td>
                    <td>86</td>
                    <td>40</td>
                    <td>45</td>
                    <td>145</td>
                    <td>235</td>
                    <td>185</td>
                    <td>7.99</td>
                </tr>
                <tr>
                    <td>СА-100</td>
                    <td>100 (10.0)</td>
                    <td>65</td>
                    <td>100</td>
                    <td>45</td>
                    <td>48</td>
                    <td>165</td>
                    <td>267</td>
                    <td>203</td>
                    <td>11.27</td>
                </tr>
                <tr>
                    <td>СА-125</td>
                    <td>125 (12.5)</td>
                    <td>70</td>
                    <td>110</td>
                    <td>48</td>
                    <td>52</td>
                    <td>180</td>
                    <td>290</td>
                    <td>216</td>
                    <td>14.25</td>
                </tr>
                <tr>
                    <td>СА-160</td>
                    <td>160 (16.0)</td>
                    <td>80</td>
                    <td>120</td>
                    <td>50</td>
                    <td>60</td>
                    <td>205</td>
                    <td>322</td>
                    <td>223</td>
                    <td>17.65</td>
                </tr>
                <tr>
                    <td>СА-200</td>
                    <td>200 (20.0)</td>
                    <td>90</td>
                    <td>130</td>
                    <td>60</td>
                    <td>68</td>
                    <td>230</td>
                    <td>362</td>
                    <td>268</td>
                    <td>26.59</td>
                </tr>
                <tr>
                    <td>СА-250</td>
                    <td>250 (25.0)</td>
                    <td>95</td>
                    <td>140</td>
                    <td>65</td>
                    <td>72</td>
                    <td>260</td>
                    <td>402</td>
                    <td>289</td>
                    <td>37.47</td>
                </tr>
                <tr>
                    <td>СА-320</td>
                    <td>320 (32.0)</td>
                    <td>105</td>
                    <td>160</td>
                    <td>75</td>
                    <td>80</td>
                    <td>280</td>
                    <td>444</td>
                    <td>325</td>
                    <td>49.50</td>
                </tr>
                <tr>
                    <td>СА-400</td>
                    <td>400 (40.0)</td>
                    <td>100</td>
                    <td>170</td>
                    <td>80</td>
                    <td>90</td>
                    <td>300</td>
                    <td>474</td>
                    <td>342</td>
                    <td>61.30</td>
                </tr>
            </tbody>
        </table>
    )
};

export default ClipSA;