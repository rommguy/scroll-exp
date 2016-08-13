define([
    'react',
    'lodash',
    'customScroll'
], function (React, _, customScroll) {
    'use strict';
    return function () {
        return React.createElement('div', {}, React.createElement('div', { 'className': 'example-wrapper' }, React.createElement('div', { 'className': 'container native-scroll' }, React.createElement('label', { 'className': 'side-title' }, 'Native Scroll'), React.createElement('div', { 'className': 'panel' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'This is boring')), React.createElement('div', { 'className': 'panel-content-native panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText())))), React.createElement('div', { 'className': 'container custom-scroll-example' }, React.createElement('label', { 'className': 'side-title' }, 'Custom Scroll'), React.createElement('div', { 'className': 'panel' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'Cool Scrollbar !')), React.createElement(customScroll, { 'allowOuterScroll': true }, React.createElement('div', { 'className': 'panel-content-custom panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText()))))), React.createElement('div', { 'className': 'container custom-scroll-example' }, React.createElement('label', { 'className': 'side-title' }, 'Crazy Designer'), React.createElement('div', { 'className': 'panel crazy-scroll' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'Who designed this ???')), React.createElement(customScroll, { 'allowOuterScroll': true }, React.createElement('div', { 'className': 'panel-content-custom panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText()))))), React.createElement('div', { 'className': 'scroll-creator' })), React.createElement('div', { 'className': 'flex-example-wrapper' }, React.createElement('div', { 'className': 'container flex-scroll-example' }, React.createElement('label', { 'className': 'side-title' }, 'Flex'), React.createElement('div', { 'className': 'panel flex-scroll' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'Even works with flexbox!')), React.createElement(customScroll, { 'flex': 1 }, React.createElement('div', { 'className': 'panel-content-flex panel-content' }, React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' }), React.createElement('div', { 'className': 'flex-content-fill' })))))));
    };
});