import React from "react";
import "./tables.css";

const  Swivel = () => {
    return (
        <div className="myTable">
        <table>
            <thead>
            <tr>
                <td>Калибр якорной цепи, d</td>
                <td>Длина, L5</td>
                <td>Шаг, P5</td>
                <td>Ширина, W5</td>
                <td>d5</td>
                <td>d6 m6</td>
                <td>d7</td>
                <td>d8</td>
                <td>h5</td>
                <td>Теоритическая масса</td>
            </tr>
            <tr>
                <td colSpan={9}>мм</td>
                <td>кг</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>9</td>
                <td>88</td>
                <td>67</td>
                <td>42</td>
                <td>10</td>
                <td>13</td>
                <td>11</td>
                <td>18</td>
                <td>31</td>
                <td>-</td>
            </tr>
            <tr>
                <td>10</td>
                <td>97</td>
                <td>74</td>
                <td>47</td>
                <td>11</td>
                <td>14</td>
                <td>12</td>
                <td>20</td>
                <td>34</td>
                <td>1.0</td>
            </tr>
            <tr>
                <td>11</td>
                <td>106</td>
                <td>81</td>
                <td>52</td>
                <td>12</td>
                <td>15</td>
                <td>13</td>
                <td>22</td>
                <td>37</td>
                <td>1.2</td>
            </tr>
            <tr>
                <td>12.5</td>
                <td>122</td>
                <td>93</td>
                <td>59</td>
                <td>14</td>
                <td>17.5</td>
                <td>15</td>
                <td>25</td>
                <td>43</td>
                <td>0.52</td>
            </tr>
            <tr>
                <td>14</td>
                <td>137</td>
                <td>104</td>
                <td>66</td>
                <td>16</td>
                <td>19.5</td>
                <td>17</td>
                <td>28</td>
                <td>48</td>
                <td>0.91</td>
            </tr>
            <tr>
                <td>16</td>
                <td>155</td>
                <td>118</td>
                <td>75</td>
                <td>17.5</td>
                <td>22.5</td>
                <td>19.5</td>
                <td>32</td>
                <td>54</td>
                <td>1.34</td>
            </tr>
            <tr>
                <td>17.5</td>
                <td>170</td>
                <td>130</td>
                <td>82</td>
                <td>19</td>
                <td>24.5</td>
                <td>21</td>
                <td>35</td>
                <td>60</td>
                <td>1.76</td>
            </tr>
            <tr>
                <td>19</td>
                <td>185</td>
                <td>141</td>
                <td>89</td>
                <td>21</td>
                <td>26.5</td>
                <td>23</td>
                <td>38</td>
                <td>65</td>
                <td>2.26</td>
            </tr>
            <tr>
                <td>20.5</td>
                <td>200</td>
                <td>152</td>
                <td>96</td>
                <td>23</td>
                <td>28.5</td>
                <td>25</td>
                <td>41</td>
                <td>70</td>
                <td>2.81</td>
            </tr>
            <tr>
                <td>22</td>
                <td>213</td>
                <td>163</td>
                <td>103</td>
                <td>24</td>
                <td>31</td>
                <td>26.5</td>
                <td>44</td>
                <td>75</td>
                <td>3.5</td>
            </tr>
            <tr>
                <td>24</td>
                <td>233</td>
                <td>178</td>
                <td>113</td>
                <td>26</td>
                <td>34</td>
                <td>29</td>
                <td>48</td>
                <td>82</td>
                <td>4.51</td>
            </tr>
            <tr>
                <td>26</td>
                <td>252</td>
                <td>192</td>
                <td>122</td>
                <td>29</td>
                <td>37</td>
                <td>31.5</td>
                <td>52</td>
                <td>88</td>
                <td>5.78</td>
            </tr>
            <tr>
                <td>28</td>
                <td>272</td>
                <td>207</td>
                <td>132</td>
                <td>31</td>
                <td>39</td>
                <td>33.5</td>
                <td>56</td>
                <td>95</td>
                <td>7.2</td>
            </tr>
            <tr>
                <td>30</td>
                <td>291</td>
                <td>222</td>
                <td>141</td>
                <td>33</td>
                <td>42</td>
                <td>36</td>
                <td>60</td>
                <td>102</td>
                <td>9.28</td>
            </tr>
            <tr>
                <td>32</td>
                <td>310</td>
                <td>237</td>
                <td>150</td>
                <td>35</td>
                <td>45</td>
                <td>38.5</td>
                <td>64</td>
                <td>109</td>
                <td>10.8</td>
            </tr>
            <tr>
                <td>34</td>
                <td>330</td>
                <td>252</td>
                <td>160</td>
                <td>37</td>
                <td>48</td>
                <td>41</td>
                <td>68</td>
                <td>116</td>
                <td>12.9</td>
            </tr>
            <tr>
                <td>36</td>
                <td>349</td>
                <td>266</td>
                <td>169</td>
                <td>40</td>
                <td>50</td>
                <td>43</td>
                <td>72</td>
                <td>122</td>
                <td>15.1</td>
            </tr>
            <tr>
                <td>38</td>
                <td>369</td>
                <td>281</td>
                <td>179</td>
                <td>42</td>
                <td>53</td>
                <td>46</td>
                <td>76</td>
                <td>130</td>
                <td>18.0</td>
            </tr>
            <tr>
                <td>40</td>
                <td>388</td>
                <td>296</td>
                <td>188</td>
                <td>44</td>
                <td>56</td>
                <td>48</td>
                <td>80</td>
                <td>136</td>
                <td>21.0</td>
            </tr>
            <tr>
                <td>42</td>
                <td>407</td>
                <td>311</td>
                <td>197</td>
                <td>46</td>
                <td>59</td>
                <td>50</td>
                <td>84</td>
                <td>143</td>
                <td>24.1</td>
            </tr>
            <tr>
                <td>44</td>
                <td>427</td>
                <td>326</td>
                <td>207</td>
                <td>48</td>
                <td>62</td>
                <td>53</td>
                <td>88</td>
                <td>150</td>
                <td>28.1</td>
            </tr>
            <tr>
                <td>46</td>
                <td>446</td>
                <td>340</td>
                <td>216</td>
                <td>51</td>
                <td>64</td>
                <td>55</td>
                <td>92</td>
                <td>157</td>
                <td>29.5</td>
            </tr>
            <tr>
                <td>48</td>
                <td>466</td>
                <td>355</td>
                <td>226</td>
                <td>53</td>
                <td>67</td>
                <td>57.5</td>
                <td>96</td>
                <td>163</td>
                <td>36.1</td>
            </tr>
            <tr>
                <td>50</td>
                <td>485</td>
                <td>370</td>
                <td>235</td>
                <td>55</td>
                <td>70</td>
                <td>60</td>
                <td>100</td>
                <td>170</td>
                <td>40.4</td>
            </tr>
            <tr>
                <td>52</td>
                <td>504</td>
                <td>385</td>
                <td>244</td>
                <td>57</td>
                <td>73</td>
                <td>62.5</td>
                <td>104</td>
                <td>177</td>
                <td>45.7</td>
            </tr>
            <tr>
                <td>54</td>
                <td>524</td>
                <td>400</td>
                <td>254</td>
                <td>60</td>
                <td>76</td>
                <td>65</td>
                <td>108</td>
                <td>184</td>
                <td>51.4</td>
            </tr>
            <tr>
                <td>56</td>
                <td>543</td>
                <td>414</td>
                <td>263</td>
                <td>62</td>
                <td>78</td>
                <td>68</td>
                <td>112</td>
                <td>190</td>
                <td>56.8</td>
            </tr>
            <tr>
                <td>58</td>
                <td>562</td>
                <td>429</td>
                <td>273</td>
                <td>64</td>
                <td>81</td>
                <td>70</td>
                <td>116</td>
                <td>197</td>
                <td>63.4</td>
            </tr>
            <tr>
                <td>60</td>
                <td>582</td>
                <td>444</td>
                <td>282</td>
                <td>66</td>
                <td>84</td>
                <td>72</td>
                <td>120</td>
                <td>204</td>
                <td>74.9</td>
            </tr>
            <tr>
                <td>62</td>
                <td>601</td>
                <td>459</td>
                <td>291</td>
                <td>68</td>
                <td>87</td>
                <td>74.5</td>
                <td>124</td>
                <td>211</td>
                <td>77.1</td>
            </tr>
            <tr>
                <td>64</td>
                <td>621</td>
                <td>474</td>
                <td>301</td>
                <td>70</td>
                <td>90</td>
                <td>77</td>
                <td>128</td>
                <td>218</td>
                <td>85.1</td>
            </tr>
            <tr>
                <td>66</td>
                <td>640</td>
                <td>488</td>
                <td>310</td>
                <td>73</td>
                <td>92</td>
                <td>79</td>
                <td>132</td>
                <td>224</td>
                <td>92.6</td>
            </tr>
            <tr>
                <td>68</td>
                <td>660</td>
                <td>503</td>
                <td>320</td>
                <td>75</td>
                <td>95</td>
                <td>82</td>
                <td>136</td>
                <td>231</td>
                <td>101.7</td>
            </tr>
            <tr>
                <td>70</td>
                <td>679</td>
                <td>518</td>
                <td>329</td>
                <td>77</td>
                <td>98</td>
                <td>84</td>
                <td>140</td>
                <td>238</td>
                <td>111.3</td>
            </tr>
            <tr>
                <td>73</td>
                <td>708</td>
                <td>540</td>
                <td>343</td>
                <td>80</td>
                <td>102</td>
                <td>87.5</td>
                <td>146</td>
                <td>248</td>
                <td>128.5</td>
            </tr>
            <tr>
                <td>78</td>
                <td>757</td>
                <td>577</td>
                <td>367</td>
                <td>86</td>
                <td>109</td>
                <td>93.5</td>
                <td>156</td>
                <td>256</td>
                <td>-</td>
            </tr>
            <tr>
                <td>86</td>
                <td>737</td>
                <td>562</td>
                <td>357</td>
                <td>84</td>
                <td>106</td>
                <td>91</td>
                <td>152</td>
                <td>258</td>
                <td>-</td>
            </tr>
            <tr>
                <td>81</td>
                <td>786</td>
                <td>599</td>
                <td>381</td>
                <td>89</td>
                <td>113</td>
                <td>97</td>
                <td>162</td>
                <td>275</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
};

export default Swivel;
