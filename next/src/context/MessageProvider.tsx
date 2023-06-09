import Success from 'public/icons/phosphor-icons/assets/duotone/check-circle-duotone.svg';
import Info from 'public/icons/phosphor-icons/assets/duotone/info-duotone.svg';
import Loading from 'public/icons/phosphor-icons/assets/duotone/lightning-duotone.svg';
import Error from 'public/icons/phosphor-icons/assets/duotone/warning-duotone.svg';
import React, {useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

interface MessageItem {
  content: string;
  type: string;
}

type IMessage = (...messages: MessageItem[]) => void;

interface IMessageProps {
  children: React.ReactElement;
}

export const MessageContext = React.createContext<IMessage>([] as any);

/**
 * @desc App message provider
 * @param {Object} children
 * @returns rect component
 */
export function MessageContextProvider({
  children,
}: IMessageProps): React.ReactElement {
  const [messages, setMessages] = useState<MessageItem[]>([] as MessageItem[]);
  const [config] = useState({
    duration: 2000,
    maxCount: 3,
    style: {
      position: 'fixed',
      top: '20vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignContent: 'center',
      flexWrap: 'wrap',
      zIndex: 51,
    } as React.CSSProperties,
  });

  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(
        () => setMessages(messagesLoc => messagesLoc.slice(1)),
        config.duration,
      );
      return () => clearTimeout(timer);
    }
  }, [messages, config.duration]);

  const addMessage = useCallback(
    (message: MessageItem) => {
      setMessages(messagesLoc => [...messagesLoc, message]);
    },
    [setMessages],
  );

  const renderMessages = () => {
    const messageContainer: HTMLElement =
      document?.getElementById('message-root') ||
      document?.createElement('DIV');
    messageContainer.setAttribute('id', 'message-root');

    const container = document?.querySelector('body');
    container?.appendChild(messageContainer);

    const mapMessages = () => {
      return (
        <div
          style={config.style}
          className={`message-wrapper w-100 flex justify-items-center`}
        >
          <style jsx>{`
            .message-service {
              max-width: 450px;
            }

            .message-icon {
              flex: 0 0 3rem;
              width: 3rem;
              height: 3rem;
            }

            @media (max-width: 765px) {
              .message-service {
                max-width: 280px;
              }

              .message-icon {
                flex: 0 0 2rem !important;
                width: 2rem !important;
                height: 2rem !important;
              }
            }
          `}</style>
          {messages.map((message, index) => (
            <div
              className={`animate-popIn my-md rounded-md shadow-inner p-xs  message-service ${message.type}`}
              key={index}
            >
              <div className="flex items-center content-center rounded-md justify-items-start p-xl">
                <div className="bg-white rounded-full message-icon p-xs">
                  {message.type === 'error' && (
                    <Error className="animate-hvr-icon-pulse" />
                  )}
                  {message.type === 'info' && (
                    <Info className="animate-hvr-icon-pulse" />
                  )}
                  {message.type === 'success' && (
                    <Success className="animate-hvr-icon-pulse" />
                  )}
                  {message.type === 'loading' && (
                    <Loading className="animate-hvr-icon-pulse" />
                  )}
                </div>
                <p className="flex-auto text-lg font-bold text-center text-white xl:text-xl lg:text-xl ml-lg">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    };

    return ReactDOM.createPortal(mapMessages(), messageContainer);
  };

  return (
    <MessageContext.Provider value={addMessage}>
      {children}
      {process.browser && renderMessages()}
    </MessageContext.Provider>
  );
}
