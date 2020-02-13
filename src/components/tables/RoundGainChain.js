import React from "react";
import "./tables.css";

const RoundGainChain = () => {
    return (
        <table className="myTable">
            <thead>
                <tr>
                    <td colSpan={2}>Калибр цепи, d</td>
                    <td colSpan={2}>Шаг цепи, p</td>
                    <td colSpan={2}>Ширина цепи, b</td>
                    <td rowSpan={2}>Пред. откл. длинны участка цепи l=11p для исполнения 1</td>
                    <td colSpan={2}>Нагрузка, кН, не менее</td>
                    <td rowSpan={2}>Масса 1 м цепи, кг</td>
                </tr>
                <tr>
                    <td>номин.</td>
                    <td>пред. откл. для исполнения 1</td>
                    <td>номин.</td>
                    <td>пред. откл. для исполнения 1</td>
                    <td>номин.</td>
                    <td>пред. откл. для исполнения 1</td>
                    <td>пробная</td>
                    <td>разрущающая</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5</td>
                    <td rowSpan={4}>+-0.4</td>
                    <td>18.5</td>
                    <td rowSpan={3}>+-0.5</td>
                    <td>17</td>
                    <td>+-0.5</td>
                    <td rowSpan={4}>+1.5<br/>-0.5</td>
                    <td>5.0</td>
                    <td>10.0</td>
                    <td>0.50</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>18.5</td>
                    <td>20</td>
                    <td>+-0.6</td>
                    <td>7.0</td>
                    <td>14.0</td>
                    <td>0.75</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>22</td>
                    <td>23</td>
                    <td>+-0.7</td>
                    <td>9.0</td>
                    <td>18.0</td>
                    <td>1.00</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>24</td>
                    <td rowSpan={4}>+-0.6</td>
                    <td>26</td>
                    <td>+-0.8</td>
                    <td>13.0</td>
                    <td>26.0</td>
                    <td>1.35</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td rowSpan={5}>+-0.5</td>
                    <td>27</td>
                    <td>32</td>
                    <td rowSpan={2}>+-0.9</td>
                    <td rowSpan={5}>+2.5<br/>-0.8</td>
                    <td>16.0</td>
                    <td>32.0</td>
                    <td>1.80</td>
                </tr>
                <tr>
                    <td>9.5</td>
                    <td>27</td>
                    <td>31</td>
                    <td>17.0</td>
                    <td>34.0</td>
                    <td>1.90</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>28</td>
                    <td>34</td>
                    <td>+-1.0</td>
                    <td>20.0</td>
                    <td>40.0</td>
                    <td>2.25</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>31</td>
                    <td rowSpan={4}>+-1.0</td>
                    <td>36</td>
                    <td>+-1.1</td>
                    <td>23.0</td>
                    <td>46.0</td>
                    <td>2.70</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>36</td>
                    <td>44</td>
                    <td>+-1.3</td>
                    <td>33.0</td>
                    <td>66.0</td>
                    <td>3.80</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td rowSpan={3}>+-0.8</td>
                    <td>45</td>
                    <td>53</td>
                    <td>+-1.6</td>
                    <td rowSpan={3}>+3.8<br/>-1.3</td>
                    <td>51.0</td>
                    <td>102.0</td>
                    <td>5.80</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>50</td>
                    <td>60</td>
                    <td>+-1.8</td>
                    <td>63.0</td>
                    <td>126.0</td>
                    <td>7.30</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>56</td>
                    <td rowSpan={2}>+-1.5</td>
                    <td>67</td>
                    <td>+-2.0</td>
                    <td>80.0</td>
                    <td>160.0</td>
                    <td>9.00</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td rowSpan={4}>+-1.0</td>
                    <td>64</td>
                    <td>77</td>
                    <td>+-2.3</td>
                    <td rowSpan={2}>+5.5<br/>-1.8</td>
                    <td>100.0</td>
                    <td>200.0</td>
                    <td>12.0</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>73</td>
                    <td>+-2.0</td>
                    <td>87</td>
                    <td>+-2.6</td>
                    <td>126.0</td>
                    <td>252.0</td>
                    <td>15.0</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>78</td>
                    <td>-</td>
                    <td>94</td>
                    <td>-</td>
                    <td>-</td>
                    <td>150.0</td>
                    <td>300.</td>
                    <td>17.5</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>84</td>
                    <td>-</td>
                    <td>101</td>
                    <td>-</td>
                    <td>-</td>
                    <td>170.0</td>
                    <td>340.0</td>
                    <td>21.0</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td rowSpan={4}>+-1.5</td>
                    <td>92</td>
                    <td>-</td>
                    <td>112</td>
                    <td>-</td>
                    <td>-</td>
                    <td>200.0</td>
                    <td>400.0</td>
                    <td>24.5</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>101</td>
                    <td>-</td>
                    <td>122</td>
                    <td>-</td>
                    <td>-</td>
                    <td>250.0</td>
                    <td>500.0</td>
                    <td>29.0</td>
                </tr>
                <tr>
                    <td>39</td>
                    <td>109</td>
                    <td>-</td>
                    <td>132</td>
                    <td>-</td>
                    <td>-</td>
                    <td>280.0</td>
                    <td>560.0</td>
                    <td>34.0</td>
                </tr>
                <tr>
                    <td>42</td>
                    <td>118</td>
                    <td>-</td>
                    <td>142</td>
                    <td>-</td>
                    <td>-</td>
                    <td>340.0</td>
                    <td>680.0</td>
                    <td>40.0</td>
                </tr>
            </tbody>
        </table>
    )
};

export default RoundGainChain;